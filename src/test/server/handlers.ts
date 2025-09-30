import { http, HttpResponse } from "msw"
import { API_URL, USERNAME } from "common"
import { userMock, repositoryMocks } from "test/mocks"

export const handlers = [
    http.get(`${API_URL}/${USERNAME}`, () => {
        return HttpResponse.json(userMock.user, { status: 200 })
    }),

    http.get(`${API_URL}/${USERNAME}/starred`, () => {
        return HttpResponse.json(repositoryMocks.list, { status: 200 })
    })
]
