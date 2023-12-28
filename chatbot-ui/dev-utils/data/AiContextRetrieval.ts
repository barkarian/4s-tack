
        export type AiContext = { key: string, context: string }
        
        export const aiContexts: AiContext[] =[
            {
        key:"strapi_current_entities_types",
        context:"type StrapiEntity<T> = T extends \"api::example-product.example-product\"\n  ? {\n      id: number;\n      name: string;\n      description: string;\n      images: Media[];\n      variations: StrapiEntity<\"api::variation.variation\">[];\n      ownerOfTheProduct: StrapiEntity<\"plugin::users-permissions.user\">;\n    }\n  : T extends \"api::variation.variation\"\n  ? {\n      variationName: string;\n      variationValue: string;\n      products: StrapiEntity<\"api::example-product.example-product\">[];\n    }\n  : T extends \"plugin::users-permissions.permission\"\n  ? {\n      username: string;\n      email: string;\n      provider: string;\n      password: string;\n      resetPasswordToken: string;\n      confirmationToken: string;\n      confirmed: boolean;\n      blocked: boolean;\n      role: StrapiEntity<\"plugin::users-permissions.role\">;\n      productsOwned: StrapiEntity<\"api::example-product.example-product\">[];\n    }\n  : never;\n\ntype Media = any;\n\ntype T1 = StrapiEntity<\"api::example-product.example-product\">;\ntype T2 = StrapiEntity<\"api::variation.variation\">;\ntype T3 = StrapiEntity<\"plugin::users-permissions.permission\">;"
    },
{
        key:"helloWorld",
        context:"hello big world"
    }
        ]