import { http, HttpResponse } from "msw"
import { API_URL } from "common"
import { userMock, repositoryMocks } from "test/mocks"

export const handlers = [
    http.get(`${API_URL}/:username`, () => {
        return HttpResponse.json(userMock.user, { status: 200 })
    }),

    http.get(`${API_URL}/:username/starred`, () => {
        return HttpResponse.json(repositoryMocks.list, { status: 200 })
    })
]
