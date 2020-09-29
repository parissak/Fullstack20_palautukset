import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const anecdoteObject = { content: content, votes: 0 }
    const response = await axios.post(baseUrl, anecdoteObject)
    return response.data
}

const update = async (content) => {
    const anecdoteObject = { ...content, votes: content.votes + 1 }
    const url = `${baseUrl}/${content.id}`
    const response = await axios.put(url, anecdoteObject)
    return response.data
}

export default { getAll, createNew, update }