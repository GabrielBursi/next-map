
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clgv7k7rs0j8g01tf5a1j4g6a/master",
  documents: "src/graphql/**/**",
  generates: {
    "src/graphql/types/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
