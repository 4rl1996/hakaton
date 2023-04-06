import {Status, STATUS_VARIANTS} from "../status/Status";

export const Table = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">

        <div className="flex items-center mt-4 gap-x-3">

          <button
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary-700 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            <span>Новый объект</span>
          </button>
        </div>
        <div
          className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
          <button
            className="px-5 py-2 text-xs font-medium text-primary-900 transition-colors duration-200 sm:text-sm bg-white hover:bg-primary-200">
            Реестр объектов
          </button>

          <button
            className="px-5 py-2 text-xs font-medium text-primary-900 transition-colors duration-200 sm:text-sm bg-white hover:bg-primary-200">
            Требуют решения
          </button>

          <button
            className="px-5 py-2 text-xs font-medium text-primary-900 transition-colors duration-200 sm:text-sm hover:bg-primary-200">
            На исполнении
          </button>
          <button
            className="px-5 py-2 text-xs font-medium text-primary-900 transition-colors duration-200 sm:text-sm hover:bg-primary-200">
            Закрыто
          </button>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </span>

          <input type="text" placeholder="Поиск"
                 className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80
                 placeholder-primary-900/70 pl-11 rtl:pr-11 rtl:pl-5
                 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>
      </div>
      <div className="my-4">
        <div className="grid grid-cols-12 rounded-t-lg border-b border-primary-200 bg-primary-200 p-4 text-primary-900">
          <div className="col-span-3">Кадастровый номер</div>
          <div className="col-span-3">Объект</div>
          <div className="col-span-3">Статус</div>
          <div className="col-span-2">Ответственный</div>
        </div>
        <div className="grid grid-cols-12 bg-white p-4 text-primary-900 border-b">
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">123124234</p>
          </div>
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">Кремль</p>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            <Status variant={STATUS_VARIANTS.in_progress}/>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            Брюсс Уилис
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white p-4 text-primary-900 border-b">
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">12312312</p>
          </div>
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">МГУ</p>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            <Status variant={STATUS_VARIANTS.awaiting_decision}/>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            Киану Ривз
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white p-4 text-primary-900 border-b">
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">35345325</p>
          </div>
          <div className="text-sm py-2 font-medium whitespace-nowrap col-span-3">
            <p className="font-medium">Лужники</p>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            <Status variant={STATUS_VARIANTS.done}/>
          </div>
          <div className="py-2 text-sm font-medium whitespace-nowrap col-span-3">
            Киану Ривз
          </div>
        </div>
      </div>

    </div>
  )
}