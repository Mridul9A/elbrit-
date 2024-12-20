import Image from 'next/image';

interface Blog {
    id: number;
    title: string;
    date: string;
    image: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: 'The Covid-19 Epidemic In 2022 Is Back',
        date: '20 APR',
        image: '/Assets/blog1-450x580.jpg.png',
    },
    {
        id: 2,
        title: 'The Covid-19 Epidemic In 2023 Is Back',
        date: '20 APR',
        image: '/Assets/blog2-450x580.jpg.png',
    },
    {
        id: 3,
        title: 'The Covid-19 Epidemic In 2022 Is Back',
        date: '20 APR',
        image: '/Assets/blog1-450x580.jpg.png',
    },
    {
        id: 4,
        title: 'The Covid-19 Epidemic In 2023 Is Back',
        date: '20 APR',
        image: '/Assets/blog2-450x580.jpg.png',
    },
    {
        id: 5,
        title: 'Hac hendrerit mus nons semper suspendisse',
        date: '17 MAR',
        image: '/Assets/blog1-450x580.jpg.png',
    },
    {
        id: 6,
        title: 'The Covid-19 Epidemic In 2022 Is Back',
        date: '20 APR',
        image: '/Assets/blog2-450x580.jpg.png',
    },
    {
        id: 7,
        title: 'The Covid-19 Epidemic In 2022 Is Back',
        date: '20 APR',
        image: '/Assets/blog1-450x580.jpg.png',
    },
    {
        id: 8,
        title: 'The Covid-19 Epidemic In 2023 Is Back',
        date: '20 APR',
        image: '/Assets/blog2-450x580.jpg.png',
    }
];

export default function Blog() {
    const getColumnBlogs = (columnIndex: number): Blog[] => {
        const itemsPerColumn = 2;
        const startIndex = columnIndex * itemsPerColumn;
        return blogs.slice(startIndex, startIndex + itemsPerColumn);
    };

    const getImageHeights = (columnIndex: number, imageIndex: number): string => {
        if (columnIndex === 0 || columnIndex === 2) {
            return imageIndex === 0 ? 'h-[70%]' : 'h-[30%]';
        }
        return imageIndex === 0 ? 'h-[30%]' : 'h-[70%]';
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 text-gray-800">
                <h6 className="mb-4 text-center text-gray-800">Our Blog</h6>
                <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
                    {[0, 1, 2, 3].map((columnIndex) => (
                        <div key={columnIndex} className="flex flex-col gap-4 h-full">
                            {getColumnBlogs(columnIndex).map((blog, index) => (
                                <div
                                    key={blog.id}
                                    className={`relative ${getImageHeights(columnIndex, index)}`}
                                >
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-x-0 top-0 p-4 flex flex-col gap-3">
                                        <div className="flex justify-start mb-3 px-0 py-0">
                                            <span className="flex justify-start bg-blue-900 text-white px-4 py-1 rounded-tr-xl rounded-br-xl text-sm font-medium">
                                                {blog.date}
                                            </span>
                                        </div>
                                        <div className=" rounded-lg p-3">
                                            <h3 className="text-lg font-semibold text-white line-clamp-2">
                                                {blog.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}