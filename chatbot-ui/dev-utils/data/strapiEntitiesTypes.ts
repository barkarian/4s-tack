
        export type AiContext = { key: string, context: string }
        
        export const aiContexts: AiContext[] =[
            {
        key:"schemaContext",
        context:"type StrapiEntity<T> = T extends \"api::example-product.example-product\"\n  ? {\n      id: number;\n      name: string;\n      description: string;\n      images: Media[];\n      variations: StrapiEntity<\"api::variation.variation\">[];\n      ownerOfTheProduct: StrapiEntity<\"plugin::users-permissions.user\">;\n    }\n  : T extends \"api::variation.variation\" \n  ? {\n      variationName: string;\n      variationValue: string;\n      products: StrapiEntity<\"api::example-product.example-product\">[];\n    }\n  : T extends \"plugin::users-permissions.permission\"\n  ? {\n      username: string;\n      email: string;\n      provider: string;\n      password: string;\n      resetPasswordToken: string;\n      confirmationToken: string;\n      confirmed: boolean;\n      blocked: boolean;\n      role: StrapiEntity<\"plugin::users-permissions.role\">;\n      productsOwned: StrapiEntity<\"api::example-product.example-product\">[];\n    }\n  : never;\n\ntype Media = any;"
    },
{
        key:"helloWorld",
        context:"hello big world"
    }
        ]