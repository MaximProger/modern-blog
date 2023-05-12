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
}

export interface IHomePage {
  id: number
  attributes: IHomePageAttributes
}

export interface IHomePageAttributes {
  createdAt: string
  updatedAt: string
  main: Main
  seo: Seo
}

export interface IMain {
  id: number
  title: string
  description: string
}

export interface ISeo {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage: IShareImage
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
  formats: Formats
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
  author: IArticleAuthor
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
  attributes: IArticleAuthorAttributes
}

export interface IArticleAuthorAttributes {
  name: string
  email: string
  createdAt: string
  updatedAt: string
  picture: IPicture
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