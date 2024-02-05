/**  PROCESS FORM */
function processForm(formObject) {
  /**--Execute if form passes an ID and if is an existing ID */
  if (formObject.RecId && checkID(formObject.RecId)) {
    /**--Update Data */
    updateData(
      getFormValues(formObject),
      CONFIG.ssheetId,
      getRangeByID(formObject.RecId)
    );
  } else {
    /**--Execute if form does not pass an ID
     **--Append Form Data */
    appendData(getFormValues(formObject), CONFIG.ssheetId, CONFIG.insertRng);
  }

  //Return last 10 rows
  return getAllData();
}

/**  GET FORM VALUES AS AN ARRAY */
function getFormValues(formObject) {
  /**  ADD OR REMOVE VARIABLES ACCORDING TO YOUR FORM */
  if (formObject.RecId && checkID(formObject.RecId)) {
    var values = [
      [
        formObject.RecId.toString(),
        formObject.nama,
        formObject.email,
        formObject.telp,
        formObject.gender,
        formObject.tglLahir,
        formObject.kota,
        new Date().toLocaleString(),
      ],
    ];
  } else {
    /** Reference https://webapps.stackexchange.com/a/51012/244121 */
    var values = [
      [
        new Date().getTime().toString(),
        formObject.nama,
        formObject.email,
        formObject.telp,
        formObject.gender,
        formObject.tglLahir,
        formObject.kota,
        new Date().toLocaleString(),
      ],
    ];
  }
  return values;
}
