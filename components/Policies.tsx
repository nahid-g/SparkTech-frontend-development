import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from './ui/table';

const policies = [
  {
    label: 'Check-in',
    value: (
      <>
        <strong>Available 24 hours</strong><br />
        Guests are required to show a photo identification and credit card upon check-in.<br />
        You&apos;ll need to let the property know in advance what time you&apos;ll arrive.
      </>
    ),
  },
  {
    label: 'Check-out',
    value: <><strong>Available 24 hours</strong></>,
  },
  {
    label: 'Cancellation/ prepayment',
    value: (
      <>
        Cancellation and prepayment policies vary according to accommodation type.<br />
        Please check what <a href="#" className="text-blue-700 underline">conditions</a> may apply to each option when making your selection.
      </>
    ),
  },
  {
    label: 'Children and beds',
    value: (
      <>
        <strong>Child policies</strong><br />
        Children of any age are welcome.<br />
        Children 12 years and above will be charged as adults at this property.<br />
        To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.<br />
        <strong>Cot and extra bed policies</strong><br />
        The number of extra beds allowed is dependent on the option you choose.<br />
        Please check your selected option for more information.<br />
        There are no cots available at this property.<br />
        All extra beds are subject to availability.
      </>
    ),
  },
  {
    label: 'No age restriction',
    value: <>There is no age requirement for check-in</>,
  },
  {
    label: 'Pets',
    value: <>Pets are not allowed.</>,
  },
  {
    label: 'Cash only',
    value: <>This property only accepts cash payments.</>,
  },
];

const Policies = () => (
    <div className='w-full  my-6 lg:my-12'>
    <h2 className="text-lg lg:text-2xl font-semibold mb-2 lg:mb-4">Policies</h2>
  <section className="w-full  rounded-xl px-2 lg:px-6 py-4 lg:py-6 border border-gray-200 ">
    <Table>
      <TableBody>
        {policies.map((policy) => (
                    <TableRow key={policy.label} className="border-t border-gray-200 first:border-t-0">
                    <TableCell className=" text-base lg:text-xl font-medium text-gray-900 pr-4 lg:pr-8 break-words whitespace-normal flex-wrap">
                      {policy.label}
                    </TableCell>
                    <TableCell className="text-gray-700 text-sm lg:text-base leading-relaxed">{policy.value}</TableCell>
                  </TableRow>
        ))}
      </TableBody>
    </Table>
  </section>
  </div>
);

export default Policies;
