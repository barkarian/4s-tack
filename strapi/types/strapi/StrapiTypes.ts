import { Common } from "@strapi/types";
import { GetValues } from "@strapi/types/dist/modules/entity-service";
import { GetNonPopulatableKeys, GetPopulatableKeys } from "@strapi/types/dist/types/core/attributes";
import { ID } from "@strapi/types/dist/types/core/entity";

export type StrapiEntity<TContentTypeUID extends Common.UID.ContentType> =
    GetValues<
        TContentTypeUID,
        GetNonPopulatableKeys<TContentTypeUID>,
        GetPopulatableKeys<TContentTypeUID>
    >

export type Event<TContentTypeUID extends Common.UID.ContentType> = {
    params: {
        data: GetValues<
            TContentTypeUID,
            GetNonPopulatableKeys<TContentTypeUID>,
            GetPopulatableKeys<TContentTypeUID>
        >
    }

}
