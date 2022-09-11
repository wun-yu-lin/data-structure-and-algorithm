
def main():
    n = input()
    arr = sorted(map(int, raw_input().split()))
    diff = 10**8
    prev = arr.pop(0)
    for i in arr:
        if i-prev<diff:
            ans = [prev,i]
            diff = i-prev
        elif i-prev==diff:
            ans.append(prev)
            ans.append(i)
        prev = i
    ans.sort()
    print " ".join(map(str,ans))