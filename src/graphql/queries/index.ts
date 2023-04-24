import * as getPages from './GetPages'
import * as getPageBySlug from './GetPageBySlug'
import * as getPlaces from './GetPlaces'
import * as getPlaceBySlug from './GetPlacesBySlug'

export const ClientQueries = {
    ...getPages,
    ...getPageBySlug,
    ...getPlaces,
    ...getPlaceBySlug,
}