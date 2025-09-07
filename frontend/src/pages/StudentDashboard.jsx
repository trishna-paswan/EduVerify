import React, { useEffect, useState } from "react";
import { auth } from "../services/auth";
import { computeFileHash } from "../utils/hash";

export default function StudentDashboard() {
  const user = auth.getUser();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    if (!user) return;
    const arr = JSON.parse(localStorage.getItem("docs_" + user.email) || "[]");
    setDocs(arr);
  }, [user]);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");
    setStatus("Computing hash...");
    try {
      const hash = await computeFileHash(file);
      setStatus("Reading file...");
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const newDoc = {
          id: Date.now().toString(),
          name: file.name,
          hash,
          dataUrl,
          uploadedAt: new Date().toISOString(),
          status: "Pending" // In real app backend will verify and update status
        };
        const key = "docs_" + user.email;
        const arr = JSON.parse(localStorage.getItem(key) || "[]");
        arr.unshift(newDoc);
        localStorage.setItem(key, JSON.stringify(arr));
        setDocs(arr);
        setStatus("Uploaded (demo).");
        setFile(null);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setStatus("Upload failed.");
    }
  };

  const handleDownload = (doc) => {
    const a = document.createElement("a");
    a.href = doc.dataUrl;
    a.download = doc.name;
    a.click();
  };

  return (
    <div className="card">
      <h2>Student Dashboard</h2>
      <div className="card-section">
        <label>Upload certificate (PDF / Image)</label>
        <input type="file" accept="application/pdf,image/*" onChange={e => setFile(e.target.files[0])} />
        <div style={{marginTop:8}}>
          <button className="btn" onClick={handleUpload}>Upload & Register (demo)</button>
          <span style={{marginLeft:12}}>{status}</span>
        </div>
      </div>

      <div className="card-section">
        <h3>Your Documents</h3>
        {docs.length === 0 ? <p>No documents uploaded yet.</p> : (
          <ul className="doc-list">
            {docs.map(d => (
              <li key={d.id}>
                <div><strong>{d.name}</strong> — <small>{new Date(d.uploadedAt).toLocaleString()}</small></div>
                <div>Hash: <code>{d.hash.slice(0, 24)}...</code> — Status: <strong>{d.status}</strong></div>
                <div style={{marginTop:6}}>
                  <button className="btn-sm" onClick={() => handleDownload(d)}>Download</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
