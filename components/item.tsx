'use client'
import { cn } from '@/lib/utils';
import { camelCaseToCapitalized } from '@/lib/utils';


export interface ItemProps extends React.ComponentProps<'div'> {
  className?: string
}

const dummyItem = {
    id: '1',
    name: 'Item 1',
    description: 'This is item 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
    tags: ['tag1', 'tag2', 'tag3'],
}


export function Item({ className }: ItemProps) {
  return (
    <>
      <div className={cn('', className)}>

      <dl className='divide-y divide-gray-100'>
					{Object.entries(dummyItem).map(([key, value]) => {
						if (typeof value === "string") {
							return (
								<div
									key={key}
									className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'
								>
									<dt className='text-sm font-medium leading-6 text-gray-900'>
										{camelCaseToCapitalized(key)}
									</dt>
									<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
										{value}
									</dd>
								</div>
							);
						} else if (Array.isArray(value)) {
							// Handle array values here
							return (
								<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
									<dt className='text-sm font-medium leading-6 text-gray-900'>
										{camelCaseToCapitalized(key)}
									</dt>
									<dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
										<ul
											role='list'
											className='divide-y divide-gray-100 rounded-md border border-gray-200'
										>
											{value.map((item) => (
												<li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
													<div className='flex w-0 flex-1 items-center'>

														<div className='ml-4 flex min-w-0 flex-1 gap-2'>
															<span className='truncate font-medium'>
                                                                {typeof item === 'object' ? JSON.stringify(item) : item}
															</span>
														</div>
													</div>
													<div className='ml-4 flex-shrink-0'>
														<a
															href='#'
															className='font-medium text-indigo-600 hover:text-indigo-500'
														>
															See More
														</a>
													</div>
												</li>
											))}
										</ul>
									</dd>
								</div>
							);
						} 
					})}
				</dl>

      </div>
    </>
  )
}
