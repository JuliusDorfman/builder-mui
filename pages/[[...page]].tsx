import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import {
    Content,
    fetchEntries,
    fetchOneEntry,
    isEditing,
    isPreviewing,
} from '@builder.io/sdk-react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import MuiOption from '../components/mui/MuiOption'
import DynamicIcon from '../components/DynamicIcon'
import MuiSelector from '../components/mui/MuiSelector'

const CUSTOM_COMPONENTS = [
    DynamicIcon,
    MuiOption,
    MuiSelector,
]

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
    const page = await fetchOneEntry({
        model: 'page',
        // apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        apiKey: 'bc3e77058e774dc699a66056c2c6a82f',
        // apiKey: '2ef515fe52414778bda6519bd36dfba9',
        options: { noTargeting: true },
        userAttributes: { urlPath: '/' + (params?.page?.join('/') || '') },
    })

    return {
        props: {
            page: page || null,
        },
        revalidate: 5,
    }
}

export async function getStaticPaths() {
    const { results: pages } = await fetchEntries({
        model: 'page',
        apiKey: 'bc3e77058e774dc699a66056c2c6a82f',
        // apiKey: '2ef515fe52414778bda6519bd36dfba9',
        options: {
            noTargeting: true,
            fields: 'data.url',
            // omit: 'data.blocks',
        },
    })

    return {
        paths: pages.map((page) => String(page.data?.url)),
        // .filter((url) => url !== '/'),
        fallback: true, // or fallback: true
    }
}

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    const isLive = !isEditing && !isPreviewing

    if (!page && isLive) {
        return (
            <>
                <Head>
                    <meta name='robots' content='noindex' />
                    <meta name='title'></meta>
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>
        )
    }

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{page?.data?.title}</title>
            </Head>
            <Content
                customComponents={CUSTOM_COMPONENTS}
                apiKey={'bc3e77058e774dc699a66056c2c6a82f'}
                // apiKey={'2ef515fe52414778bda6519bd36dfba9'}
                model='page'
                content={page}
            />
        </>
    )
}
