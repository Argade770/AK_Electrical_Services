import { openDB } from "idb";

const dbPromise = openDB("AKElectricalDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("contacts")) {
      const store = db.createObjectStore("contacts", {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("createdAt", "createdAt");
    }
  },
});

// ADD CONTACT
export async function addContact(contact) {
  const db = await dbPromise;

  return db.add("contacts", {
    ...contact,

    name: contact.name.trim(),
    email: contact.email.trim().toLowerCase(),
    phone: contact.phone.trim(),

    address: (contact.address || "").trim(),
    workType: (contact.workType || "").trim(),

    subject: contact.subject.trim(),
    message: contact.message.trim(),

    status: "New",
    createdAt: new Date().toISOString(),
  });
}

// GET ALL CONTACTS
export async function getContacts() {
  const db = await dbPromise;
  return db.getAll("contacts");
}

// UPDATE CONTACT
export async function updateContact(id, changes) {
  const db = await dbPromise;

  const existing = await db.get("contacts", Number(id));

  if (!existing) {
    throw new Error("Contact not found");
  }

  return db.put("contacts", {
    ...existing,
    ...changes,
    id: Number(id),
  });
}

// DELETE CONTACT
export async function deleteContact(id) {
  const db = await dbPromise;
  return db.delete("contacts", Number(id));
}