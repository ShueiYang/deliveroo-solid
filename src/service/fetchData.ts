import { DeliverooData } from "../../data.types"


export async function  getDeliverooPageData(): Promise<DeliverooData> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PAGE_URL}`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
      
  } catch (err) {
    console.error(err)
    throw err        
  }
}