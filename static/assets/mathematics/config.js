self.__uv$config = {
  prefix: "/a/",
  bare: "/ca/", // kendi railway tünelin
  encodeUrl: Ultraviolet.codec.base64.encode, // xor yerine base64 daha stabildir
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "/assets/mathematics/handler.js?v=2026",
  bundle: "/assets/mathematics/bundle.js?v=2026",
  config: "/assets/mathematics/config.js?v=2026",
  sw: "/assets/mathematics/sw.js?v=2026",
};
