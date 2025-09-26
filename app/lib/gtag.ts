export const GA_TRACKING_ID = 'G-F9GRB7RVFW';

type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Registra visualização de página
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Registra eventos personalizados
export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Adiciona definição global para evitar erro de tipo no TS
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
