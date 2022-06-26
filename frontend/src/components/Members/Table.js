import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import { getMembers } from "../../services/members";

import { useDispatch, useSelector } from "react-redux";

import { setData } from "../../store/slices/membersSlice";
import { getMembersSelector } from "../../store/selectors/members";

const TableMembers = ({ token }) => {
  const dispatch = useDispatch();

  const tableData = useSelector(getMembersSelector);

  const paginationComponentOptions = {
    rowsPerPageText: 5,
    noRowsPerPage: true,
  };

  useEffect(() => {
    getMembers({ token }).then((result) => {
      dispatch(setData(result.data));
    });
  }, []);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Second Name",
      selector: (row) => row.lastName,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Ssn",
      selector: (row) => row.ssn,
    },
  ];
  return (
    <div>
      {tableData && (
        <DataTable
          columns={columns}
          data={tableData}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      )}
    </div>
  );
};

export default TableMembers;
