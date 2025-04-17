import { PrismaQueryBuilder } from "../../builders/PrismaQueryBuilder"
import prisma from "../../shared/prisma"

const createCustomerIntoDb = async (payload: any) => {
    const result = await prisma.customer.create({
        data: payload
    })
    return result
}

const getAllCustomersFromDbWithQuery = async (query: any) => {
    const { search = '', sort = 'asc', page = 1, limit = 10 } = query;

    return await PrismaQueryBuilder({
        model: prisma.customer,
        searchFields: ['name'],
        search,
        sortField : 'createdAt',
        sortOrder: sort,
        page: Number(page),
        limit: Number(limit),
    })
}

export const customerService = {
    createCustomerIntoDb,
    getAllCustomersFromDbWithQuery
    
}