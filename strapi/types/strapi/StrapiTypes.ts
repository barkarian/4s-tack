import { Common } from "@strapi/types";
import { GetValues } from "@strapi/types/dist/modules/entity-service";
import { GetNonPopulatableKeys, GetPopulatableKeys } from "@strapi/types/dist/types/core/attributes";

export type StrapiEntity<TContentTypeUID extends Common.UID.ContentType> =
    GetValues<
        TContentTypeUID,
        GetNonPopulatableKeys<TContentTypeUID>,
        GetPopulatableKeys<TContentTypeUID>
    >