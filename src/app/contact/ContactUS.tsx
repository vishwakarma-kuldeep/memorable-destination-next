import ContactForm from '@/components/ContactForm'

const Contact: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center py-16 lg:py-24 px-4 lg:px-8">
      <div className="w-full">
        <ContactForm />
      </div>
     
    </div>
  )
}

export default Contact