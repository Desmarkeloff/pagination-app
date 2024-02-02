import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {

    interface Product {
        _id: number;
        title: string;
        description: string;
        price: number;
    }

    interface Pagination {
        totalProducts: number;
        pageCount: number;
        next: {
            page: number;
            limit: number;
        } | null;
        prev: {
            page: number;
            limit: number;
        } | null;
    }

    interface ApiResponse {
        data: Product[];
        pagination: Pagination;
    }
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err: any) {
                console.log(err.response.data);
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const refetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err: any) {
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, refetch };
};