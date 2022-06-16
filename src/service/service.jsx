//@ts-expect-error
import axios from 'axios'

/**
 * Get housing data from API
 * @async
 * @return {Promise<HousingData>} The data from the URL.
 */

export async function getData() {
  try {
    const response = await axios.get(`../datas/data.json`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**User information
 * @typedef {Object} HousingData
 * @param {String} title
 * @param {String} cover
 * @param {Object[]} pictures
 * @param {String} description
 * @param {Object} host
 * @param {String} rating
 * @param {String} location
 * @param {Object[]} equipments
 * @param {Object[]} tags
 */
