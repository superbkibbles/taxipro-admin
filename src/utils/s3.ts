import { BASE_API_URL } from "@/constants";
import { getUserInfo } from "./auth";

export const getFileBlob = async (fileName: string, userId: string) => {
  const body = await fetch(getFileUrl(fileName, userId));
  const data = await body.blob();
  return data;
};

export const getFileUrl = (fileName?: string, userId?: string) =>
  fileName
    ? fileName.includes("https://") || fileName.includes("http://")
      ? fileName
      : `${BASE_API_URL}/file/${
          process.env.NEXT_PUBLIC_BUCKET_NAME || "subscape-staging"
        }/${encodeURIComponent(fileName)}/${userId || getUserInfo()?.id}`
    : "";

export const getS3FileUrl = (fileName?: string, userId?: string) =>
  fileName
    ? fileName.includes("https://") || fileName.includes("http://")
      ? fileName
      : `https://${
          process.env.NEXT_PUBLIC_BUCKET_NAME || "subscape-staging"
        }.s3.us-east-2.amazonaws.com/${encodeURIComponent(fileName)}`
    : "";

export const saveFile = (blob: Blob, filename: string) => {
  const navigator: any = window.navigator;
  if ("msSaveOrOpenBlob" in navigator) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
};
//
//export const downloadZip = async (filePaths: Doc[]) => {
//  const zip = new JSZip()
//  await Promise.all(
//    filePaths.map(async (doc) => {
//      const user = getUserInfo()
//      if (user) {
//        const fileBlob = await getFileBlob(doc.path, user.id)
//        zip.file(doc.name, fileBlob, { base64: true })
//      }
//    })
//  )
//  const zipFile = await zip.generateAsync({ type: 'blob' })
//  saveFile(zipFile, `docs-${dayjs().format()}`)
//}

export const getBase64 = (img: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(img);
  });
};

export const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
  }
  return isJpgOrPng && isLt2M;
};

export function bytesToSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  const i = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)) as unknown as string
  );
  return Math.round(bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}
