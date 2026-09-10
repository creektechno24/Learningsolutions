'use client'

import { useState } from 'react'

interface PdfUploaderProps {
  value: string
  onChange: (url: string) => void
}

export default function PdfUploader({
  value,
  onChange,
}: PdfUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (file.type !== 'application/pdf') {
      setError('Please select a PDF file.')
      return
    }

    setError('')
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(
        '/api/admin/upload/pdf',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Unable to upload PDF'
        )
      }

      if (!data.url) {
        throw new Error(
          'PDF upload succeeded but URL was not returned'
        )
      }

      onChange(data.url)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to upload PDF'
      )
    } finally {
      setUploading(false)
      event.target.value = ''
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-slate-700">
        PDF
      </label>

      <input
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      />

      {uploading && (
        <p className="text-sm text-slate-500">
          Uploading PDF...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {value && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-medium text-green-700">
            ✓ PDF uploaded
          </p>

          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            View PDF
          </a>
        </div>
      )}
    </div>
  )
}