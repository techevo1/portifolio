'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const PHONE = '5561998257721';
const DEFAULT_MESSAGE = encodeURIComponent('Olá Davi! 👋 Encontrei seu site da TechEvo e tenho interesse em desenvolver um projeto digital.');

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
