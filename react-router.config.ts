import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Configurações adicionais para produção
  future: {
    v8_middleware: false
  }
} satisfies Config;