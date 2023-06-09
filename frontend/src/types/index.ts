export interface ICategory {
  id: number
  attributes: ICategoryAttributes
}

export interface ICategoryAttributes {
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  articles: ICategoryArticles
}

export interface ICategoryArticles {
  data: ICategoryDaum[]
}

export interface ICategoryDaum {
  id: number
  attributes: ICategoryArticleAttributes
}

export interface ICategoryArticleAttributes {
  title: string
  description: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: IArticleCategory
  author: IArticleAuthor,
}

export interface IHomePage {
  id: number
  attributes: IHomePageAttributes
}

export interface IHomePageAttributes {
  createdAt: string
  updatedAt: string
  main: IMain
  seo: ISeo
}

export interface IMain {
  id: number
  title: string
  description: string
}

export interface ISeo {
  id?: number
  metaTitle: string
  metaDescription: string
  shareImage?: IShareImage
  article?: boolean
}

export interface IShareImage {
  data: IData
}

export interface IData {
  id: number
  attributes: IDataAttributes
}

export interface IDataAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: IFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface IFormats {
  thumbnail: IThumbnail
  small: ISmall
  medium: IMedium
  large: ILarge
}

export interface IThumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface ISmall {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface IMedium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface ILarge {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface IArticle {
  id: number
  attributes: IArticleAttributes
}

export interface IArticleAttributes {
  title: string
  description: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: IArticleCategory
  author: IArticleAuthor,
  image: IPicture
}

export interface IArticleCategory {
  data: IArticleData
}

export interface IArticleData {
  id: number
  attributes: IArticleDataAttributes
}

export interface IArticleDataAttributes {
  name: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface IArticleAuthor {
  data: IArticleAuthorData
}

export interface IArticleAuthorData {
  id: number
  attributes: IAuthorAttributes
}

export interface IAuthor {
  id: number
  attributes: IAuthorAttributes
}

export interface IAuthorAttributes {
  name: string
  email: string
  createdAt: string
  updatedAt: string
  picture: IPicture
  slug: string
}

export interface IPicture {
  data: IPictureData
}

export interface IPictureData {
  id: number
  attributes: IPictureAttributes
}

export interface IPictureAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: IFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}
export interface IContext {
  id: number
  attributes: IContextAttributes
}

export interface IContextAttributes {
  siteName: string
  createdAt: string
  updatedAt: string
  favicon: IFavicon
  defaultSeo: IDefaultSeo
}

export interface IFavicon {
  data: IFaviconData
}

export interface IFaviconData {
  id: number
  attributes: IFaviconAttributes
}

export interface IFaviconAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: IFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface IDefaultSeo {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage: IShareImage
}