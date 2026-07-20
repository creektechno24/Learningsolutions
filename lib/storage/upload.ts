export async function uploadFile(
  file: File,
  folder?: string
) {
  const isImage = file.type.startsWith("image")
  const isVideo = file.type.startsWith("video")

  // Everything else (PDF, DOCX, PPTX, XLSX, ZIP...)
  const isRaw = !isImage && !isVideo

  // Size Limits
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5 MB
  const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50 MB

  if (isImage && file.size > MAX_IMAGE_SIZE) {
    throw new Error("Image size must be less than 5MB")
  }

  if (!isImage && file.size > MAX_FILE_SIZE) {
    throw new Error("File size must be less than 50MB")
  }

  const formData = new FormData()

  formData.append("file", file)

  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  )

  formData.append(
    "folder",
    folder ||
      (isVideo
        ? "learning-solutions/videos"
        : isImage
        ? "learning-solutions/images"
        : "learning-solutions/files")
  )

  // Decide upload endpoint
  const uploadType = isImage
    ? "image"
    : isVideo
    ? "video"
    : "raw"

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }/${uploadType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Upload failed"
    )
  }

  return {
    url: data.secure_url,
    publicId: data.public_id,
    resourceType: data.resource_type,
  }
}