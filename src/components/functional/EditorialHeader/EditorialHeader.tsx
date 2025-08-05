"use client";

import { useState } from "react";
import EditorialHeaderDesktop from "./EditorialHeaderDesktop";
import EditorialHeaderMobile from "./EditorialHeaderMobile";
import ContactModal from "@/components/ui/ContactModal/ContactModal";
import BookDemoModal from "@/components/ui/BookDemoModal/BookDemoModal";

export default function EditorialHeader() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  const openBookDemoModal = () => setIsBookDemoModalOpen(true);
  const closeBookDemoModal = () => setIsBookDemoModalOpen(false);

  return (
    <>
      <div className={`hidden lg:block`}>
        <EditorialHeaderDesktop 
          onContactClick={openContactModal} 
          onBookDemoClick={openBookDemoModal}
        />
      </div>
      <div className={`lg:hidden`}>
        <EditorialHeaderMobile 
          onContactClick={openContactModal}
          onBookDemoClick={openBookDemoModal}
        />
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <BookDemoModal isOpen={isBookDemoModalOpen} onClose={closeBookDemoModal} />
    </>
  );
}
