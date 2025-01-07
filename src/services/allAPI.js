import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveVideoAPI - use POST method, used by add component , to URL:http://localhost:3000/uploadVideos

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

// getALLVideoAPI - use GET method, used by view component , to URL:http://localhost:3000/uploadVideos
 
export const getALLVideoAPI = async (videoDetails)=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

// getALLVideoAPI - use POST method, used by videoCard component , to URL:http://localhost:3000/history
 
export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

// getALLHistoryAPI - use GET method, used by history component , to URL:http://localhost:3000/history
 
export const getALLHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

// deleteHistoryAPI - delete http request to  URL:http://localhost:3000/history from history when user clicked on delete button
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

// deleteVideoAPI - delete http request to  URL:http://localhost:3000/uploadVideos from history when user clicked on delete button
export const deleteVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI -
export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

// getALLCategoryAPI - use GET method,used by category component,  URL:http://localhost:3000/categories
export const getALLCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,"")
}

// deleteCategoryAPI - delete http request to  URL:http://localhost:3000/categories from category when user clicked on delete button
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// updateCategoryAPI - Put http request to  URL:http://localhost:3000/categories/id from category when drop a video over category button
export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails?.id}`,categoryDetails)
}