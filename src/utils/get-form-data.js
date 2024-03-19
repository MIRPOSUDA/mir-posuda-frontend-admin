export default function getFormData(formID) {
  const form = new FormData(formID);
  const data = {};
  for (const [key, value] of form.entries()) {
    data[key] = value;
  }

  return data;
}
