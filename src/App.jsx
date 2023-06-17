import { DateTime } from 'luxon'
import { useMemo } from 'react'
import './App.css'
import movies from './MOVIE_DATA.json'
import BasicTable from './components/BasicTable'

function App() {
  const data = useMemo(() => movies, [])

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID',
    },
    {
      header: 'Name',
      columns: [
        {
          header: 'First',
          accessorKey: 'first_name',
          footer: 'First name',
        },
        {
          header: 'Last',
          accessorKey: 'last_name',
          footer: 'Last name',
        },
      ],
    },
    // {
    //   header: 'Name',
    //   accessorFn: row => `${row.first_name} ${row.last_name}`,
    // },
    // {
    //   header: 'First name',
    //   accessorKey: 'first_name',
    //   footer: 'First name',
    // },
    // {
    //   header: 'Last name',
    //   accessorKey: 'last_name',
    //   footer: 'Last name',
    // },
    {
      header: 'Email',
      accessorKey: 'email',
      footer: 'Email',
    },
    {
      header: 'Gender',
      accessorKey: 'gender',
      footer: 'Gender',
    },
    {
      header: 'Date of birth',
      accessorKey: 'dob',
      footer: 'Date of birth',
      cell: info =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ]

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]

  return (
    <>
      <h1>React-table</h1>
      <BasicTable data={data} columns={movieColumns} />
    </>
  )
}

export default App
