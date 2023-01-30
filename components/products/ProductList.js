import Link from 'next/link'

export default function ProductList({ ...props }) {
  const thumbnail = props.product.assets.filter((item, index) => {
    return (item.image_dimensions.width === 350)
  })[0]

  return (
    <div className="lg:w-1//4 md:w-1/2 p-4 w-full">
      <Link href={'/product/' + props.product.permalink}>
        a className="block relative h-48 rounded overflow-hidden">
        <img
          alt={props.product.name}
          className="object-cover object-center w-full h-full block"
          src={thumbnail.url}
          />
  )
  
}