import socket
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding
import time
client = socket.socket()
client.connect(('localhost',12346))
# Generate RSA KEYS
private_key = rsa.generate_private_key(public_exponent = 65537, key_size=2048)
public_key = private_key.public_key()
#MESSAGE
message = input("Enter Message:")
message=message.encode()
#Sign message
signature = private_key.sign(message,padding.PKCS1v15(), hashes.SHA256())
#convert public key to PEM format
public_key_pem = public_key.public_bytes(encoding=serialization.Encoding.PEM,format=serialization.PublicFormat.SubjectPublicKeyInfo)

client.send(message)
print("Message send Successfully")
time.sleep(1)
client.send(public_key_pem)
print("Public Key send Successfully")
time.sleep(1)
#Get response
response = client.recv(1024)
print("Server says:", response.decode())

client.close()

