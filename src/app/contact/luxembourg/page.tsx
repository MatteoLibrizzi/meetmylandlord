import TallyContactForm from "@/components/tally/form"

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 my-10">
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
      </div>

      <div className="w-full bg-card rounded-lg shadow-sm p-6">
        <TallyContactForm />
      </div>
    </main>
  )
}

