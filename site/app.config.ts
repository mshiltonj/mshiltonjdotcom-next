const SITE_HOST = process.env.SITE_HOST || "http://localhost:3000"
const envPerPage = parseInt(process.env.PER_PAGE || "10")

export default {
  "SITE_HOST": SITE_HOST,
  "DEFAULT_OG_IMAGE": SITE_HOST + process.env.DEFAULT_OG_IMAGE,
  "PER_PAGE": envPerPage,
}