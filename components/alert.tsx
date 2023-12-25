import cn from 'classnames'

export default function Alert  ()  {

  return (
    <div
      className={cn('mt-10 ml-5'
      )}
    >
        <>
            KAULBHASKAR Guru Ji is in Mumbai.{' '}
            <a
                href={`https://wa.me/+919934418459`}
                target="_blank" rel="noopener noreferrer"
                className="underline text-red hover:text-success duration-200 transition-colors"
            >
                available on What's App
            </a>
        </>
    </div>
  )
}
