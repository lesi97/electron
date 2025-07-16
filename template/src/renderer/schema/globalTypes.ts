export type MimeType =
  // Images
  | "image/*"
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/webp"
  | "image/bmp"
  | "image/svg+xml"
  | "image/tiff"
  | "image/x-icon"

  // Videos
  | "video/*"
  | "video/mp4"
  | "video/webm"
  | "video/ogg"
  | "video/avi"
  | "video/mpeg"
  | "video/quicktime"
  | "video/x-ms-wmv"

  // Audio
  | "audio/*"
  | "audio/mpeg"
  | "audio/wav"
  | "audio/ogg"
  | "audio/aac"
  | "audio/flac"
  | "audio/x-midi"

  // Documents
  | "application/pdf"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "text/plain"
  | "text/csv"
  | "text/html"
  | "application/json"
  | "application/xml"

  // Archives
  | "application/zip"
  | "application/x-tar"
  | "application/x-7z-compressed"
  | "application/gzip"

  // Applications
  | "application/javascript"
  | "application/x-sh"
  | "application/java-archive"
  | "application/x-httpd-php"
  | "application/octet-stream"
  | "application/x-dosexec"

  // Fonts
  | "font/otf"
  | "font/ttf"
  | "font/woff"
  | "font/woff2";
