export default {
  secretId: 'AKIDnMgohKZoIXN4WqpITTDF2arsscAXxrc6',
  secretKey: 'PhjbMtAD6kKhplhPq2yqSs175rOfqthH',
  proxy: '',
  durationSeconds: 1800,
  bucket: 'upload-1302986588',
  region: 'ap-guangzhou',
  allowPrefix: '*',
  // 简单上传和分片，需要以下的权限，其他权限列表请看 https://cloud.tencent.com/document/product/436/14048
  allowActions: [
    // 简单上传
    'name/cos:PutObject',
    // 表单上传、小程序上传
    'name/cos:PostObject',
    // 分片上传
    'name/cos:InitiateMultipartUpload',
    'name/cos:ListMultipartUploads',
    'name/cos:ListParts',
    'name/cos:UploadPart',
    'name/cos:CompleteMultipartUpload',
  ],
  // cos 文件上传并发数
  fileParallelLimit: 3,
  // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
  chunkParallelLimit: 8,
  // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
  ChunkSize: 1024 * 1024,

  cosDomain: 'upload-1302986588.cos.ap-guangzhou.myqcloud.com',
  cosDir: 'upload-s/',

  originDomain: 'upload-1302986588.cos.ap-guangzhou.myqcloud.com',
};
