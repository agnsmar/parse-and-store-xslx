import path from 'path'
import xlsx from 'xlsx'

export const parseXLSX = (fileName: string): object[] | null => {
  const filePath = path.resolve(`./data/${fileName}.xlsx`);

  const workbook = xlsx.readFile(filePath);
  const sheetNames = workbook.SheetNames;

  // Get the data of "Sheet1"
  const data: object[] | null = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])

  return data
}
