import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';

const projects = [
    {
      id: 1,
      title: 'GraphQL API',
      initials: 'GA',
      team: 'Engineering',
      members: [
        {
          name: 'Dries Vincent',
          handle: 'driesvincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Courtney Henry',
          handle: 'courtneyhenry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      totalMembers: 12,
      lastUpdated: 'March 17, 2020',
      pinned: true,
      bgColorClass: 'bg-pink-600',
    },
    {
        id: 2,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 3,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 4,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 5,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 6,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    {
        id: 7,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
          {
            name: 'Dries Vincent',
            handle: 'driesvincent',
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Courtney Henry',
            handle: 'courtneyhenry',
            imageUrl:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    }
    // More projects...
  ]

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  

const TableScans = () => {
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
      <div className="px-4 sm:px-6">
        <h2 className="text-sm font-medium text-gray-900">Projects</h2>
      </div>
      <ul role="list" className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
        {projects.map((project) => (
          <li key={project.id}>
            <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
              <span className="flex items-center space-x-3 truncate">
                <span
                  className={classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                  aria-hidden="true"
                />
                <span className="truncate text-sm font-medium leading-6">
                  {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                </span>
              </span>
              <ChevronRightIcon
                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Projects table (small breakpoint and up) */}
    <div className="mt-8 hidden sm:block col-span-2">
      <div className="inline-block min-w-full border-b border-gray-200 align-middle">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                <span className="lg:pl-2">Project</span>
              </th>
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                Members
              </th>
              <th
                className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                scope="col"
              >
                Last updated
              </th>
              <th
                className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                scope="col"
              />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classNames(project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                      aria-hidden="true"
                    />
                    <a href="#" className="truncate hover:text-gray-600">
                      <span>
                        {project.title} <span className="font-normal text-gray-500">in {project.team}</span>
                      </span>
                    </a>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      {project.members.map((member) => (
                        <img
                          key={member.handle}
                          className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                          src={member.imageUrl}
                          alt={member.name}
                        />
                      ))}
                    </div>
                    {project.totalMembers > project.members.length ? (
                      <span className="flex-shrink-0 text-xs font-medium leading-5">
                        +{project.totalMembers - project.members.length}
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                  {project.lastUpdated}
                </td>
                <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
            type="button"
            className="ml-6 mt-3 mb-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
        Button text
      </button>
      <button
            type="button"
            className="ml-3 mt-3 mb-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
        Button text
      </button>
      </div>
    </div> 
    </> 
  )
}

export default TableScans