import socket
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding
import time
#Create socket
server = socket.socket()
server.bin(('localhost',12346))
server.listen(1)
print("Server listening...")

conn, addr = server.accept()
print("Connected by", addr)
#Receive Message

message = conn.recv(1024)
print("Message Receive Successfully")

time.sleep(1)
#Receive signature
signature = conn.recv(1024)
print("Signature Receive Successfully")
time.sleep(1)
#Receive public key
public_key_pem = conn.recv(2048)
print("Public key Receive Successfully")
public_key = serialization.load_pem_public_key(public_key_pem)
#  Verify Signature
try:
    public_key.verify(signature,message,padding,PKCS1v15(),hashes.SHA256())
    print("sIGNATURE vERIFIED:", message.decode())
    conn.send(b"Valid Signature")
except:
    print("Invalid Signature!")
    conn.send(b"Invalid Signature")
              
conn.close()
server.close()