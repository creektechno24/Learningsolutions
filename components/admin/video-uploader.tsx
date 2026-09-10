'use client'

import { useRef, useState } from 'react'

interface VideoUploaderProps {
  value: string
  onChange: (url: string) => void
}

export default function VideoUploader({
  value,
  onChange,
}: VideoUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    setError('')
    setProgress(0)

    if (!file.type.startsWith('video/')) {
      setError('Please select a valid video file.')
      return
    }

    const maxSize = 500 * 1024 * 1024

    if (file.size > maxSize) {
      setError('Video file must be smaller than 500 MB.')
      return
    }

    try {
      setUploading(true)

      const timestamp = Math.floor(Date.now() / 1000)
      const folder = 'learning-solutions/videos'

      // -------------------------------------------------------
      // 1. Get signed upload parameters
      // -------------------------------------------------------

      const signatureResponse = await fetch('/api/cloudinary/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paramsToSign: {
            timestamp,
            folder,
          },
        }),
      })

      const signatureData = await signatureResponse.json()

      if (!signatureResponse.ok) {
        throw new Error(
          signatureData.error ||
            'Failed to prepare video upload'
        )
      }

      // -------------------------------------------------------
      // 2. Cloudinary configuration
      // -------------------------------------------------------

      const cloudName =
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

      const apiKey =
        process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY

      if (!cloudName || !apiKey) {
        throw new Error(
          'Cloudinary configuration is missing'
        )
      }

      const formData = new FormData()

      formData.append('file', file)
      formData.append('api_key', apiKey)
      formData.append('timestamp', String(timestamp))
      formData.append('folder', folder)
      formData.append(
        'signature',
        signatureData.signature
      )

      // -------------------------------------------------------
      // 3. Upload to Cloudinary
      // -------------------------------------------------------

      const xhr = new XMLHttpRequest()

      const uploadPromise = new Promise<string>(
        (resolve, reject) => {
          xhr.open(
            'POST',
            `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
          )

          xhr.upload.onprogress = (event) => {
            if (!event.lengthComputable) return

            const percent = Math.round(
              (event.loaded / event.total) * 100
            )

            setProgress(percent)
          }

          xhr.onload = () => {
            try {
              const data = JSON.parse(xhr.responseText)

              if (
                xhr.status >= 200 &&
                xhr.status < 300
              ) {
                resolve(data.secure_url)
              } else {
                reject(
                  new Error(
                    data.error?.message ||
                      'Cloudinary upload failed'
                  )
                )
              }
            } catch {
              reject(
                new Error(
                  'Invalid upload response'
                )
              )
            }
          }

          xhr.onerror = () => {
            reject(
              new Error('Video upload failed')
            )
          }

          xhr.send(formData)
        }
      )

      const secureUrl = await uploadPromise

      // -------------------------------------------------------
      // 4. Replace current URL in parent form
      // -------------------------------------------------------

      onChange(secureUrl)

      setProgress(100)
    } catch (error) {
      console.error(
        'Video upload error:',
        error
      )

      setError(
        error instanceof Error
          ? error.message
          : 'Video upload failed'
      )
    } finally {
      setUploading(false)

      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  // ---------------------------------------------------------
  // Remove video
  // ---------------------------------------------------------

  const handleRemove = () => {
    if (uploading) return

    setError('')
    setProgress(0)

    onChange('')
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-900">
          Lesson Video
        </label>

        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm"
        />
      </div>

      {uploading && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">
              Uploading video...
            </span>

            <span className="font-semibold text-slate-900">
              {progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-slate-900 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {/* Existing / newly uploaded video */}
      {value && !uploading && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold text-green-800">
              ✓ Video uploaded
            </p>

            <button
              type="button"
              onClick={handleRemove}
              className="rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Remove video
            </button>
          </div>

          <p className="mt-2 break-all text-sm text-green-700">
            {value}
          </p>

          <video
            controls
            preload="metadata"
            className="mt-4 max-h-72 w-full rounded-xl bg-black"
            src={value}
          />
        </div>
      )}

      {!value && !uploading && (
        <p className="text-sm text-slate-500">
          No video uploaded.
        </p>
      )}
    </div>
  )
}