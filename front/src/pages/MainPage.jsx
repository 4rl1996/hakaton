import {Header} from "../components/header/Header";
import {Table} from "../components/table/Table";


export const MainPage = () => {
  return (
    <div className="w-full bg-primary-100 h-screen">
      <Header />
      <Table />
    </div>
  )
}