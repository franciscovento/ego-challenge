import { useEffect, useState } from 'preact/hooks';
import { menu } from '../../../utils/data/menu.data';

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} class="flex items-center gap-4">
        <span class="hidden sm:block"> Menú</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
        >
          <rect
            x="0.927734"
            y="16"
            width="25.0174"
            height="2"
            rx="1"
            fill="#191919"
          ></rect>
          <rect
            x="0.927734"
            y="8"
            width="25.0174"
            height="2"
            rx="1"
            fill="#191919"
          ></rect>
          <rect
            x="0.927734"
            width="25.0174"
            height="2"
            rx="1"
            fill="#191919"
          ></rect>
        </svg>
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          class={
            'fixed hidden z-40 sm:block w-full h-screen bg-black/50 animate-fadeIn top-0 left-0  '
          }
        ></div>
      )}
      <aside
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%) ',
          opacity: open ? 1 : 0,
        }}
        class={
          ' w-full sm:w-80 z-50 bg-white h-svh fixed top-0 right-0 duration-300 ease-in-out overflow-y-auto flex flex-col gap-4 text-xl '
        }
      >
        <div class={'flex items-center justify-end p-4 mr-4'}>
          <button
            onClick={() => setOpen(false)}
            class={'flex items-center text-sm gap-2  h-[40px]'}
          >
            Cerrar{' '}
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Fill 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.50034 9.13664L1.97969 14.6573C1.52614 15.1108 0.791506 15.1122 0.339316 14.6614C-0.115589 14.2051 -0.111515 13.4745 0.342032 13.021L5.86404 7.50034L0.342032 1.97969C-0.110157 1.52614 -0.112873 0.791506 0.339316 0.339316C0.794222 -0.115589 1.52614 -0.111515 1.97969 0.342032L7.50034 5.86404L13.021 0.342032C13.4745 -0.110157 14.2092 -0.112873 14.6614 0.339316C15.1163 0.794222 15.1108 1.52614 14.6573 1.97969L9.13664 7.50034L14.6573 13.021C15.1108 13.4745 15.1122 14.2092 14.6614 14.6614C14.2051 15.1163 13.4745 15.1108 13.021 14.6573L7.50034 9.13664Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <ul class={'flex flex-col gap-2 pb-4 items-end border-b px-4 mr-4'}>
          {menu[0].map((item) => {
            return (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <ul class={'flex flex-col gap-2 py-4 items-end border-b px-4 mr-4'}>
          {menu[1].map((item) => {
            return (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <ul class={'flex flex-col gap-2 py-4 items-end px-4 mr-4'}>
          {menu[2].map((item) => {
            return (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <ul
          class={
            'flex flex-1 flex-col gap-2 pb-4 pt-6 items-end bg-app-bg-tertiary px-8 '
          }
        >
          {menu[3].map((item) => {
            return (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Menu;
