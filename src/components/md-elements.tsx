import { createElement } from 'react';
import toast from 'react-hot-toast';
import { FaRegClipboard } from 'react-icons/fa';

export function H1({ children }: { children: any }) {
  return createElement('h2', { className: 'text-3xl font-bold mt-4 mb-2' }, children);
}

export function H2({ children }: { children: any }) {
  return createElement('h2', { className: 'text-2xl font-bold mt-3 mb-1' }, children);
}

export function H3({ children }: { children: any }) {
  return createElement('h3', { className: 'text-xl font-bold mt-2 mb-1' }, children);
}

export function H4({ children }: { children: any }) {
  return createElement('h4', { className: 'text-lg font-bold mt-2 mb-1' }, children);
}

export function H5({ children }: { children: any }) {
  return createElement('h5', { className: 'text-base font-bold mt-1 mb-1' }, children);
}

export function H6({ children }: { children: any }) {
  return createElement('h6', { className: 'text-sm font-bold mt-1 mb-1' }, children);
}

export function Paragraph({ children }: { children: any }) {
  return createElement('p', { className: 'text-md mt-2 mb-2' }, children);
}

export function Blockquote({ children }: { children: any }) {
  return createElement('blockquote', { className: 'text-lg italic mt-2 mb-2' }, children);
}

export function Pre({ children }: { children: any }) {
  const copyToClipboard = () => {
    if (!navigator.clipboard || !children.props.children || typeof children.props.children !== 'string') return;
    navigator.clipboard.writeText(children.props.children);
    toast.success('Copiado com sucesso!');
  };
  return (
    <div className="relative">
      <button onClick={copyToClipboard} aria-label="copiar código" type="button" className="absolute p-2 rounded-md bg-green-600 right-2 top-2 cursor-pointer hover:bg-green-700">
        <FaRegClipboard className="text-white" />
      </button>
      {createElement('pre', { className: 'text-sm text-white rounded-lg bg-gray-900 p-2 mt-1 mb-1' }, children)}
    </div>
  );
}

export function Code({ children }: { children: any }) {
  return createElement('code', { className: 'text-sm bg-gray-900 text-white rounded-lg p-1 mt-1 mb-1' }, children);
}

export function Strong({ children }: { children: any }) {
  return createElement('strong', { className: 'font-bold' }, children);
}

export function Emphasis({ children }: { children: any }) {
  return createElement('em', { className: 'italic' }, children);
}

export function Link({ href, children }: { href: string; children: any }) {
  return createElement('a', { href, className: 'text-blue-600 hover:underline' }, children);
}

export function Image({ src, alt }: { src: string; alt: string }) {
  return createElement('img', { src, alt });
}

export function Ol({ children }: { children: any }) {
  return createElement('ol', { className: 'list-decimal pl-5 mt-2 mb-2' }, children);
}

export function Ul({ children }: { children: any }) {
  return createElement('ul', { className: 'list-disc pl-5 mt-2 mb-2' }, children);
}

export function Li({ children }: { children: any }) {
  return createElement('li', { className: 'mb-2' }, children);
}
