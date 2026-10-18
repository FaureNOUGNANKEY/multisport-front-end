import ContactHeader from "@/components/home/contact/ContactHeader";
import ContactForm from "@/components/home/contact/ContactForm";
import ContactInfos from "@/components/home/contact/ContactInfos";
import OpeningHours from "@/components/home/contact/OpeningHours";

export default function ContactPage() {
  return (
    <main className="bg-gray-100 py-[60px] px-9">
      <div className="max-w-6xl mx-auto">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <ContactInfos />
            <OpeningHours />
          </div>
        </div>
      </div>
    </main>
  );
}