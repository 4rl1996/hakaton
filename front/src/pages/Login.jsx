import {Link} from "react-router-dom";

export const Login = () => {
  return (
    <div className="font-mono bg-gray-400 h-screen">
      <div className="container mx-auto ">
        <div className="flex justify-center px-6 ">
          <div className="w-full xl:w-3/4 lg:w-6/12 flex py-12">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{backgroundImage: "url('https://www.moneyunder30.com/wp-content/uploads/2020/11/shutterstock_1724405470-648x364-c-default.jpg')"}}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-primary-900">Войти</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:mb-0 py-2">
                  <label className="block mb-2 text-sm font-bold text-primary-900" for="firstName">
                    Имя
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="Имя"
                  />
                </div>
                <div className="py-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                    Фамилия
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Фамилия"
                  />
                </div>
                <div className="py-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Почта
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Почта"
                  />
                </div>
                <div className="mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Пароль
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="*************"
                  />
                </div>
                <div className="mb-6 text-center">
                  <Link to={'/table'}
                    className="w-full px-4 py-2 font-bold text-white bg-primary-700 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Войти
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}