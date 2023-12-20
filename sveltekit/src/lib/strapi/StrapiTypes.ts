import type { Attribute, Common, EntityService, Utils } from '@strapi/types';
import type { GetNonPopulatableKeys, GetPopulatableKeys } from '@strapi/types/dist/types/core/attributes';

export type ID = `${number}` | number;
export type BooleanValue = boolean | 'true' | 'false' | 't' | 'f' | '1' | '0' | 1 | 0;
export type NumberValue = string | number;
export type DateValue = Attribute.DateValue | number;
export type TimeValue = Attribute.TimeValue | number;
export type DateTimeValue = Attribute.DateTimeValue | number;
export type TimeStampValue = Attribute.TimestampValue;

type AnyEntity = { id: EntityService.Params.Attribute.ID } & { [key: string]: any };
export type GetValues<
    TSchemaUID extends Common.UID.Schema,
    TFields extends Attribute.GetKeys<TSchemaUID>,
    TPopulate extends Attribute.GetKeys<TSchemaUID>
> = Utils.Expression.If<
    Common.AreSchemaRegistriesExtended,
    Utils.Guard.Never<TFields | TPopulate, Attribute.GetKeys<TSchemaUID>> extends infer TKeys
    ? Attribute.GetValues<TSchemaUID, TKeys>
    : never,
    AnyEntity
>;

export type GetValuesNested<TComponentsUIDs extends Common.UID.Schema> =
    {
        [TKey in Attribute.GetOptionalKeys<TComponentsUIDs>]?: GetValue<Attribute.Get<TComponentsUIDs, TKey>>;
    } & {
        [TKey in Attribute.GetRequiredKeys<TComponentsUIDs>]-?: GetValue<Attribute.Get<TComponentsUIDs, TKey>>;
    }
/**
* Attribute.GetValue override with extended values
*
* Fallback to unknown if never is found
*/

export type GetValue<TAttribute extends Attribute.Attribute> = Utils.Expression.If<
    Utils.Expression.IsNotNever<TAttribute>,
    Utils.Expression.MatchFirst<
        [
            // Relation
            [
                Utils.Expression.Extends<TAttribute, Attribute.OfType<'relation'>>,
                any // Response<RelationTarget>
            ],
            // DynamicZone
            [
                Utils.Expression.Extends<TAttribute, Attribute.OfType<'dynamiczone'>>,
                TAttribute extends Attribute.DynamicZone<infer TComponentsUIDs>
                ? Array<
                    // Extract tuple values to a component uid union type
                    Utils.Array.Values<TComponentsUIDs> extends infer TComponentUID
                    ? TComponentUID extends Common.UID.Component
                    ? GetValues<
                        TComponentUID,
                        GetNonPopulatableKeys<TComponentUID>,
                        GetPopulatableKeys<TComponentUID>
                    > & { __component: TComponentUID }
                    : never
                    : never
                >
                : never
            ],
            // Component
            [
                Utils.Expression.Extends<TAttribute, Attribute.OfType<'component'>>,
                TAttribute extends Attribute.Component<infer TComponentUID, infer TRepeatable>
                ? TComponentUID extends Common.UID.Component
                ? GetValues<
                    TComponentUID,
                    GetNonPopulatableKeys<TComponentUID>,
                    GetPopulatableKeys<TComponentUID>
                > extends infer TValues
                ? Utils.Expression.If<TRepeatable, TValues[], TValues>
                : never
                : never
                : never
            ],
            // Fallback
            // If none of the above attribute type, fallback to the original Attribute.GetValue (while making sure it's an attribute)
            [Utils.Expression.True, Attribute.GetValue<TAttribute, unknown>]
        ],
        unknown
    >,
    unknown
>;

export type StrapiEntity<TContentTypeUID extends Common.UID.ContentType> =
    GetValues<
        TContentTypeUID,
        GetNonPopulatableKeys<TContentTypeUID>,
        GetPopulatableKeys<TContentTypeUID>
    >


// TEST
// declare function fetch<T extends Common.UID.ContentType>(uid: T): Promise<Response<T>>;
// fetch('api::note.note').then(r => r.data.attributes.content)